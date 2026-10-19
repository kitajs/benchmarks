<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.2`
* __Run:__ Mon Oct 19 2026 03:05:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 48033.6    | 20.32        | 8.57          |
| kita                     | 1.1.36   | ✓      | 46864.8    | 20.83        | 8.40          |
| rayo                     | 1.4.6    | ✓      | 46268.8    | 21.10        | 8.25          |
| polka                    | 0.5.2    | ✓      | 46187.2    | 21.14        | 8.24          |
| fastify                  | 4.29.1   | ✓      | 46170.4    | 21.15        | 8.28          |
| server-base              | 7.1.32   | ✗      | 45861.6    | 21.31        | 8.18          |
| server-base-router       | 7.1.32   | ✓      | 45026.4    | 21.72        | 8.03          |
| connect                  | 3.7.0    | ✗      | 44977.6    | 21.75        | 8.02          |
| polkadot                 | 1.0.0    | ✗      | 44708.0    | 21.87        | 7.97          |
| 0http                    | 3.5.3    | ✓      | 43135.2    | 22.68        | 7.69          |
| connect-router           | 1.3.8    | ✓      | 42703.2    | 22.91        | 7.62          |
| h3                       | 1.15.11  | ✗      | 42586.4    | 22.98        | 7.59          |
| h3-router                | 1.15.11  | ✓      | 40073.6    | 24.45        | 7.15          |
| hono                     | 4.13.13  | ✓      | 39238.4    | 25.00        | 6.44          |
| restana                  | 4.9.9    | ✓      | 37960.8    | 25.84        | 6.77          |
| koa                      | 2.16.4   | ✗      | 36344.6    | 27.03        | 6.48          |
| take-five                | 2.0.0    | ✓      | 34625.8    | 28.38        | 12.45         |
| restify                  | 11.1.0   | ✓      | 34334.6    | 28.62        | 6.19          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33656.0    | 29.22        | 6.00          |
| koa-router               | 12.0.1   | ✓      | 32600.6    | 30.17        | 5.81          |
| hapi                     | 21.4.10  | ✓      | 32251.8    | 30.49        | 5.75          |
| fastify-big-json         | 4.29.1   | ✓      | 11599.2    | 85.65        | 133.45        |
| express                  | 4.22.3   | ✓      | 10786.1    | 92.15        | 1.92          |
| express-with-middlewares | 4.22.3   | ✓      | 10257.5    | 96.89        | 3.81          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
