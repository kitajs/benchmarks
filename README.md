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
* __Node:__ `v20.18.2`
* __Run:__ Mon Feb 10 2025 01:29:26 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.2 | ✗      | 49095.2    | 19.87        | 8.76          |
| 0http                    | 3.5.3    | ✓      | 48173.6    | 20.25        | 8.59          |
| polkadot                 | 1.0.0    | ✗      | 47733.6    | 20.46        | 8.51          |
| connect                  | 3.7.0    | ✗      | 47672.8    | 20.49        | 8.50          |
| fastify                  | 4.29.0   | ✓      | 47647.2    | 20.49        | 8.54          |
| polka                    | 0.5.2    | ✓      | 47620.0    | 20.50        | 8.49          |
| kita                     | 1.1.36   | ✓      | 47423.2    | 20.58        | 8.50          |
| rayo                     | 1.4.6    | ✓      | 46897.6    | 20.81        | 8.36          |
| server-base              | 7.1.32   | ✗      | 46684.8    | 20.88        | 8.33          |
| h3                       | 1.15.0   | ✗      | 46175.2    | 21.16        | 8.23          |
| server-base-router       | 7.1.32   | ✓      | 45443.2    | 21.51        | 8.10          |
| h3-router                | 1.15.0   | ✓      | 44549.6    | 21.95        | 7.94          |
| connect-router           | 1.3.8    | ✓      | 44143.2    | 22.17        | 7.87          |
| restana                  | 4.9.9    | ✓      | 41925.6    | 23.35        | 7.48          |
| hono                     | 4.7.0    | ✓      | 41186.4    | 23.80        | 6.76          |
| koa                      | 2.15.3   | ✗      | 37981.0    | 25.83        | 6.77          |
| take-five                | 2.0.0    | ✓      | 35908.2    | 27.30        | 12.91         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35864.6    | 27.39        | 6.40          |
| restify                  | 11.1.0   | ✓      | 35603.8    | 27.56        | 6.42          |
| koa-router               | 12.0.1   | ✓      | 34836.4    | 28.19        | 6.21          |
| hapi                     | 21.3.12  | ✓      | 32428.6    | 30.33        | 5.78          |
| fastify-big-json         | 4.29.0   | ✓      | 12006.4    | 82.73        | 138.14        |
| express                  | 4.21.2   | ✓      | 11378.2    | 87.31        | 2.03          |
| express-with-middlewares | 4.21.2   | ✓      | 10539.8    | 94.29        | 3.92          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
