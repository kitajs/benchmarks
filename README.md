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
* __Node:__ `v20.19.5`
* __Run:__ Mon Oct 13 2025 01:35:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| connect                  | 3.7.0    | ✗      | 47430.4    | 20.59        | 8.46          |
| bare                     | v20.19.5 | ✗      | 47356.0    | 20.60        | 8.45          |
| kita                     | 1.1.36   | ✓      | 47125.6    | 20.72        | 8.45          |
| rayo                     | 1.4.6    | ✓      | 46619.2    | 20.92        | 8.31          |
| fastify                  | 4.29.1   | ✓      | 46578.4    | 20.96        | 8.35          |
| 0http                    | 3.5.3    | ✓      | 46147.2    | 21.17        | 8.23          |
| polka                    | 0.5.2    | ✓      | 46105.6    | 21.20        | 8.22          |
| server-base-router       | 7.1.32   | ✓      | 45841.6    | 21.32        | 8.17          |
| polkadot                 | 1.0.0    | ✗      | 45707.2    | 21.38        | 8.15          |
| server-base              | 7.1.32   | ✗      | 45210.4    | 21.62        | 8.06          |
| h3-router                | 1.15.4   | ✓      | 44481.6    | 21.98        | 7.93          |
| connect-router           | 1.3.8    | ✓      | 44392.0    | 22.05        | 7.92          |
| h3                       | 1.15.4   | ✗      | 43280.0    | 22.60        | 7.72          |
| restana                  | 4.9.9    | ✓      | 39342.4    | 24.92        | 7.02          |
| hono                     | 4.9.11   | ✓      | 37789.6    | 25.95        | 6.20          |
| koa                      | 2.16.2   | ✗      | 36154.2    | 27.16        | 6.45          |
| take-five                | 2.0.0    | ✓      | 35692.2    | 27.51        | 12.83         |
| restify                  | 11.1.0   | ✓      | 35659.0    | 27.54        | 6.43          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34776.0    | 28.25        | 6.20          |
| koa-router               | 12.0.1   | ✓      | 34210.8    | 28.73        | 6.10          |
| hapi                     | 21.4.3   | ✓      | 32193.6    | 30.56        | 5.74          |
| fastify-big-json         | 4.29.1   | ✓      | 12044.6    | 82.45        | 138.59        |
| express                  | 4.21.2   | ✓      | 11005.2    | 90.24        | 1.96          |
| express-with-middlewares | 4.21.2   | ✓      | 10455.6    | 95.03        | 3.89          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
